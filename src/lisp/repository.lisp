(in-package :repository)

(defmacro defentity (classname superclasses slots &rest options)
	(let* ((repo-name-string (string-upcase( concatenate 'string (string classname) "-repository")))
				 (repo-name (intern repo-name-string))
				 (repo-file-name (concatenate 'string repo-name-string ".data")))
		(push '(id :initform (uuid::make-v4-uuid) :accessor id) slots)
		`(progn
			 (defclass ,classname ,superclasses
				 ,(mapcar (lambda (slot)
										(if (atom slot)
												(list slot
															:accessor slot)
												(if (find :accessor slot)
														slot
														(append slot (list :accessor (car slot))))))
									slots)
			 ,@options)
			 (defclass ,repo-name ,() ,(list
																	'( data :initform nil :reader data)
																	`( storage-name :initform ,repo-file-name)))
			 (defmethod add ((repo ,repo-name) (entity ,classname))
				 (push entity (slot-value repo 'data)))
			 (defmethod exist-p((repo ,repo-name) (entity ,classname))
				 (member entity (data repo)))
			 (defmethod list-data((repo ,repo-name))
				 (data repo))
			 (defmethod load-data ((repo ,repo-name))
				 (setf (slot-value repo 'data) (restore ,repo-file-name)))
			 (defmethod save-data((repo ,repo-name))
				 (store (slot-value repo 'data) ,repo-file-name)))))
