(asdf:defsystem #:fate3
  :serial t
  :depends-on (#:hunchentoot
							 #:simple-date
               #:postmodern
							 #:parenscript
							 #:cl-json)
  :components ((:file "package")
							 (:file "bootstrap")))

