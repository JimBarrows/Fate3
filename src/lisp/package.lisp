(in-package :cl-user)

(defpackage repository
	(:use :cl :cl-store)
	(:export defentity))

(defpackage fate3
	(:use :cl :hunchentoot :cl-json :repository)
	(:export start-application))
