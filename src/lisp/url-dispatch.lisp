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
	("/js/:dir/:file" :get getJsDirFile)
	("/css/:file" :get getCss))

(defvar *root* (string "../web"))

(defun index()
		(let ((in (open (concatenate 'string *root* "/index.html") :if-does-not-exist nil)))
			(when in
				(format nil "~a" (slurp-stream in)))))

(defun getJs () 
	(setf (content-type*) "application/javascript")
	(let* ((jsFile (getf *route-params* :file))
				 (path (concatenate 'string *root* "/js/" jsFile))
				 (in (open path :if-does-not-exist nil)))
		(log-message* :WARN (concatenate 'string "get jsfile: " jsFile))
		(when in
			(format nil "~a" (slurp-stream in)))))

(defun getJsDirFile () 
	(setf (content-type*) "application/javascript")
	(let* ((jsFile (getf *route-params* :file))
				 (jsDir (getf *route-params* :dir))
				 (path (concatenate 'string *root* "/js/" jsDir "/" jsFile))
				 (in (open path :if-does-not-exist nil)))
		(log-message* :WARN (concatenate 'string "path: " path "dir: " jsDir "file: " jsFile))
		(when in
			(format nil "~a" (slurp-stream in)))))

(defun getCss () 
	(setf (content-type*) "text/css")
	(let ((cssFile (getf *route-params* :file)))
		(let ((in (open (concatenate 'string *root* "/css/" cssFile) :if-does-not-exist nil)))
			(log-message* :WARN (concatenate 'string "file: " cssFile))
			(when in
				(format nil "~a" (slurp-stream in))))))

(defun slurp-stream (stream)
  (let ((seq (make-string (file-length stream) :initial-element #\Space)))
    (read-sequence seq stream)
    seq))
