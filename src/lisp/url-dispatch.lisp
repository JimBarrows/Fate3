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
	("/api/v1/games/:gameid" :get get-game )
	("/api/v1/games" :get get-games :post post-games)
	("/api/v1/currentIssues" :post post-currrent-issues)
)

(trace :print-all t uuid:make-uuid-from-string repository::find-by-id)

(defun post-current-issues()
	(let* ((input-string (hunchentoot::raw-post-data :force-text t))
				 (input-json (rest (first (decode-json-from-string input-string))))
				 (name (rest (assoc :name input-json)))
				 (game-id (rest (assoc :game input-json)))
				 (issue (make-instance 'aspect :name name)))))

(defun get-game()
	(let* (( game-id-string (getf *route-params* :gameid))
				 ( game-id (uuid:make-uuid-from-string game-id-string))
				 ( game (repository::find-by-id *game-repository* game-id)))
		(if game
				(format nil "{\"game\": ~a}"
								(json:encode-json-to-string game))
				(format nil "{\"game\": []}"))))

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
		(let* ((path (merge-pathnames #p"index.html" *web-root*)))
			(handle-static-file path)))

(defun get-fonts () 
	(let* ((font-file (getf *route-params* :file))
				 (path (merge-pathnames font-file *font-root*)))
		(handle-static-file path)))

(defun get-js () 
	(let* ((js-file (getf *route-params* :file))
				 (path (merge-pathnames js-file *js-root*)))
			(handle-static-file path)))

(defun get-js-dir-file () 
	(let* ((js-file (getf *route-params* :file))
				 (js-dir (getf *route-params* :dir))
				 (path (merge-pathnames (pathname (concatenate 'string js-dir "/" js-file)) *js-root*)))
		(handle-static-file path)))


(defun get-css () 
	(setf (content-type*) "text/css")
	(let* ((css-file (getf *route-params* :file))
				 (path (merge-pathnames css-file *css-root*)))
		(handle-static-file path)))
