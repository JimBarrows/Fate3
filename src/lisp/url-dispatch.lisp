(in-package :fate3)

(push( create-folder-dispatcher-and-handler "/js/" "../web/js/") *dispatch-table*)
(push( create-folder-dispatcher-and-handler "/img/" "../web/img/") *dispatch-table*)
(push( create-folder-dispatcher-and-handler "/css/" "../web/css/") *dispatch-table*)
(push (create-static-file-dispatcher-and-handler "/index.html" "../web/index.html") 
			*dispatch-table*)
(push (create-static-file-dispatcher-and-handler "/" "../web/index.html") 
			*dispatch-table*)

(define-easy-handler (index :uri *games*) () 
	(setf (content-type*) "application/json")
	(encode-json-to-string (list (make-instance 'game :name "Name 1" :setting "Setting 1")
															 (make-instance 'game :name "Name2" :setting "Setting 2"))))
