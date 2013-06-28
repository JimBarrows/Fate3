(in-package :fate3)

(defvar *ht-server* nil)

(defun start-application()
	"Start up the application"
	(setf *ht-server* 
		(start (make-instance 'easy-acceptor 
													:port 8080
													:document-root #p"../web/"))))

(defun stop-application()
	"Stop the application cleanly"
	(stop *ht-server*)
	(setf *ht-server* nil))