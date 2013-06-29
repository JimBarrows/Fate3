(asdf:defsystem #:fate3
  :serial t
  :depends-on (#:hunchentoot
							 #:parenscript
							 #:cl-json
							 #:cl-store
							 #:uuid)
  :components ((:file "package")
							 (:file "configuration")
							 (:file "repository")
							 (:file "models")
							 (:file "urls")
							 (:file "url-dispatch")
							 (:file "bootstrap")))

