(in-package :fate3)
												
(defmethod json::encode-json((u uuid::uuid) 
														 &optional (stream *json-output*)) 
	"encode a uuid class as a string, so we get the actual number"
	(write-char #\" stream)
	(uuid::print-object u stream)
	(write-char #\" stream))

(map-routes
	("/" :get index)
	("/js/:file" :get getJs)
	("/fonts/:file" :get getFonts)
	("/js/:dir/:file" :get getJsDirFile)
	("/css/:file" :get getCss)
	("/api/v1/games" :get get-games :post postGames))

(defun get-games() 
	(let (( game-list (repository::list-data *game-repository*)))
		(if game-list
				(format nil "{\"game\": ~a}" 
						(json:encode-json-to-string game-list))
				(format nil "{\"game\": []}"))))


(defun postGames()
	(let* ((name (getf *route-params* :name))
				 (setting (getf *route-params* :setting))
				 (newGame (make-instance 'game :name name :setting setting)))
		(repository::add *game-repository* newGame )
		(json:encode-json-to-string newGame)))

(defun index()
		(let* ((path (concatenate 'string *web-root* "/index.html")))
			(handle-static-file path)))

(defun getJs () 
	(let* ((jsFile (getf *route-params* :file))
				 (path (concatenate 'string *web-root* "/js/" jsFile)))
			(handle-static-file path)))

(defun getFonts () 
	(let* ((jsFile (getf *route-params* :file))
				 (path (concatenate 'string *web-root* "/fonts/" jsFile)))
		(handle-static-file path)))

(defun getJsDirFile () 
	(let* ((jsFile (getf *route-params* :file))
				 (jsDir (getf *route-params* :dir))
				 (path (concatenate 'string *web-root* "/js/" jsDir "/" jsFile)))
		(handle-static-file path)))


(defun getCss () 
	(setf (content-type*) "text/css")
	(let* ((cssFile (getf *route-params* :file))
				(path (concatenate 'string *web-root* "/css/" cssFile)))
		(handle-static-file path)))
