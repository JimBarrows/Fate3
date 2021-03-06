(in-package :fate3)

(setf parenscript::*js-string-delimiter* #\")
;(setf *PS-PRINT-PRETTY* t)
;(setf *INDENT-NUM-SPACES* 4)
(setf hunchentoot::*show-lisp-errors-p* t)
(setf *catch-errors-p* nil)
(setf *lisp-errors-log-level* :info)
(setf *lisp-warnings-log-level* :info)
(defvar *http-stream* *standard-output*)
(defvar *web-root* (truename (asdf:system-relative-pathname :fate3 (string "../web"))))
(defvar *js-root* (merge-pathnames ( pathname "js/") *web-root*))
(defvar *font-root* (merge-pathnames ( pathname "fonts/") *web-root*))
(defvar *css-root* (merge-pathnames ( pathname "css/") *web-root*))
(defvar *project-name* "Fate 3 Helper")
