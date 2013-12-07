(in-package :cl-user)

(defpackage repository
	(:use :cl :cl-store :uuid )
	(:export defentity))

(defpackage fate3
	(:use :cl :hunchentoot :ht-routes :cl-json :repository)
	(:export start-application stop-application))
