(in-package :fate3)
												
(defmethod json::encode-json((u uuid::uuid) 
														 &optional (stream *json-output*)) 
	"encode a uuid class as a string, so we get the actual number"
	(write-char #\" stream)
	(uuid::print-object u stream)
	(write-char #\" stream))

(map-routes
	("/" :get index)
	("/js/:file" :get get-js)
	("/fonts/:file" :get get-fonts)
	("/js/:dir/:file" :get get-js-dir-file)
	("/css/:file" :get get-css)
	("/api/v1/games" :get get-games :post post-games)
	("/api/v1/currentIssues" :post post-currrent-issues)
)

(defun post-current-issues()
	(let* ((input-string (hunchentoot::raw-post-data :force-text t))
				 (input-json (rest (first (decode-json-from-string input-string))))
				 (name (rest (assoc :name input-json)))
				 (current (rest (assoc :current input-json)))
				 (game-id (rest (assoc :game input-json)))
				 (issue (make-instance 'aspect :name name)))))
		
(defun get-games() 
	(let (( game-list (repository::list-data *game-repository*)))
		(if game-list
				(format nil "{\"game\": ~a}" 
						(json:encode-json-to-string game-list))
				(format nil "{\"game\": []}"))))


(defun post-games()
	(let* ((input-string (hunchentoot::raw-post-data :force-text t))
				 (input-json (rest (first (decode-json-from-string input-string))))
				 (name (rest (assoc :name input-json)))
				 (setting (rest (assoc :setting input-json)))
				 (newGame (make-instance 'game :name name :setting setting)))
		(repository::add *game-repository* newGame )
		(format nil "{ \"game\": ~a}" (json:encode-json-to-string newGame))))

(defun index()
		(let* ((path (concatenate 'string *web-root* "/index.html")))
			(handle-static-file path)))

(defun get-js () 
	(let* ((jsFile (getf *route-params* :file))
				 (path (concatenate 'string *web-root* "/js/" jsFile)))
			(handle-static-file path)))

(defun get-fonts () 
	(let* ((jsFile (getf *route-params* :file))
				 (path (concatenate 'string *web-root* "/fonts/" jsFile)))
		(handle-static-file path)))

(defun get-js-dir-file () 
	(let* ((jsFile (getf *route-params* :file))
				 (jsDir (getf *route-params* :dir))
				 (path (concatenate 'string *web-root* "/js/" jsDir "/" jsFile)))
		(handle-static-file path)))


(defun get-css () 
	(setf (content-type*) "text/css")
	(let* ((cssFile (getf *route-params* :file))
				(path (concatenate 'string *web-root* "/css/" cssFile)))
		(handle-static-file path)))
