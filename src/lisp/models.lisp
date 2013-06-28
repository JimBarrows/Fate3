(in-package :fate3)

(defentity game ()
	((name :initarg :name
				 :initform "New Game")
	 (setting :initarg :setting
						:initform "Setting / Scale")
	 (number-of-aspects :initform 5)
	 (number-of-phases :initform 3)
	 (skill-cap :initform 4)
	 (skill-organization :initform :pyramid)
	 (number-of-columns :initform :n-a)
	 (refresh-rate :initform 3)
	 (number-of-initial-stunts :initform 3)
	 (types-of-stress-tracks :initform '(:physical :mental))
	 (default-number-of-stress-boxes :initform 2)
	 (default-consequence-slots :initform '(2 4 6))))
