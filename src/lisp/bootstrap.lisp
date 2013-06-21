(in-package :fate3)

(setf parenscript::*js-string-delimiter* #\")
(setf hunchentoot::*show-lisp-errors-p* t)
(setf *catch-errors-p* nil)
(setf *lisp-errors-log-level* :info)
(setf *lisp-warnings-log-level* :info)


(push (create-folder-dispatcher-and-handler "/js/" "../web/js/") 
			*dispatch-table*)
(push (create-folder-dispatcher-and-handler "/img/" "../web/img/") 
			*dispatch-table*)
(push (create-folder-dispatcher-and-handler "/css/" "../web/css/") 
			*dispatch-table*)
(push (create-static-file-dispatcher-and-handler "/index.html" "../web/index.html") 
			*dispatch-table*)
(push (create-static-file-dispatcher-and-handler "/" "../web/index.html") 
			*dispatch-table*)

;(connect-to-database)

(defun start-application()
	"Start up the application"
	(defvar *ht-server* 
		(start (make-instance 'easy-acceptor 
													:port 8080
													:document-root #p"../web/"))))

(defun stop-application()
	"Stop the application cleanly"
	(stop *ht-server*))