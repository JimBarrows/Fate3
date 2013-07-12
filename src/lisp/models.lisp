(in-package :fate3)

(defclass stress-track () 
	((name :initarg name)
	 (stress-boxes :initarg stress-boxes)))

(defclass consequences-slot ()
	((name)
	 (stress-points)))

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
	 (default-consequence-slots :initform (list '(mild 2) '(moderate 4) '(severe 6)))))

(defentity stunt ()
	((name :initarg :name)
	 (description :initarg :description)))

(defun new-stunt (name description)
	"Create a new stunt class"
	(make-instance 'stunt :name name :description description))

(defentity skill () 
	((name :initarg :name)
	 (description :initarg :description)
	 (overcome :initarg :overcome)
	 (create-an-advantage :initarg :create-an-advantage)
	 (attack :initarg :attack)
	 (defend :initarg :defend)
	 (stunts :initarg :stunts)
	 (stress-tracks :initarg :stress-tracks)))

(defun new-skill (name description overcome create-an-advantage attack defend stunts stress-tracks)
	"Creates a new skill"
	(make-instance 'skill 
								 :name name 
								 :description description 
								 :overcome overcome 
								 :create-an-advantage create-an-advantage 
								 :attack attack
								 :defend defend 
								 :stunts stunts 
								 :stress-tracks stress-tracks))

(defentity extra ()
	((name)
	 (permissions)
	 (costs)
	 (description)
	 (overcome)
	 (create-an-advantage)
	 (attack)
	 (defend)))

(defentity character-sheet ()
	((name)
	 (description)
	 (refresh)
	 (high-concept)
	 (trouble)
	 (aspects)
	 (skills)
	 (extras)
	 (stunts)
	 (stress-boxes)
	 (consequences)))