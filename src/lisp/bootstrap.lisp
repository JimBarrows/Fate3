(in-package :fate3)

(defvar *ht-server* nil)
(defvar *game-repository* nil)

(defun start-application()
	"Start up the application"
	(setf *game-repository* (make-instance 'game-repository))
;	(repository::load-data *game-repository*)
	(setf *ht-server* 
		(start (make-instance 'acceptor 
													:port 8080))))
;													:document-root #p"../web/"))))

(defun stop-application()
	"Stop the application cleanly"
	(repository::save-data *game-repository*)
	(stop *ht-server*)
	(setf *ht-server* nil))