(in-package :fate3)

;(push( create-folder-dispatcher-and-handler "/js/" "../web/js/") *dispatch-table*)
;(push( create-folder-dispatcher-and-handler "/img/" "../web/img/") *dispatch-table*)
;(push( create-folder-dispatcher-and-handler "/css/" "../web/css/") *dispatch-table*)
;(push (create-static-file-dispatcher-and-handler "/index.html" "../web/index.html") 
;			*dispatch-table*)
;(push (create-static-file-dispatcher-and-handler "/" "../web/index.html") 
;			*dispatch-table*)

;(setq *dispatch-table* 
;			(list
;			 (create-regex-dipatcher *games* games-url-handler)))
												
(defmethod json::encode-json((u uuid::uuid) 
														 &optional (stream *json-output*)) 
	"encode a uuid class as a string, so we get the actual number"
	(write-char #\" stream)
	(uuid::print-object u stream)
	(write-char #\" stream))

(map-routes
	("/" :get index))

(defun index()
		(let ((in (open "../web/index.html" :if-does-not-exist nil)))
			(when in
				(format nil (slurp-stream in)))))

(defun slurp-stream (stream)
  (let ((seq (make-string (file-length stream))))
    (read-sequence seq stream)
    seq))


;(defun get-id-from-uri()
;	"Returns the id from the URI request"
;	(car (cl-ppcre:all-matches-as-strings
;(define-easy-handler (index :uri *games* :default-request-type :get) () 

;(defun games-url-handler
;	(setf (content-type*) "application/json")
;	(let ((request-type (request-method *request*)))
;		(cond ((eq request-type :get)
;					 (encode-json-to-string (repository::list-data *game-repository*)))
;					((eq request-type :post)
;					 (let* ((json (raw-post-data :force-text t))
;									(decoded-json (decode-json-from-string json))
;									(new-game (make-instance 'game 
;																					 :id ;(if (assoc :id decoded-json :test #'equalp)
;																								;	 (uuid::make-uuid-from-string (cdr (assoc :id decoded-json)))
;																									 (uuid::make-v4-uuid);)
;																					 :name (cdr (assoc :name decoded-json)) 
;																					 :setting (cdr (assoc :setting decoded-json)))))
;						 (encode-json-to-string new-game))))))
