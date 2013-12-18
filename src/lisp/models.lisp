(in-package :fate3)

(defclass aspect() 
	((name :initarg :name 
				:accessor aspect-name)
	(description :accessor aspect-description))
	(:documentation "Represents any aspect used anywhere in the game."))

(defentity skill-description () 
	((name :initarg :name)
	 (description :initarg :description)
	 (overcome :initarg :overcome)
	 (create-an-advantage :initarg :create-an-advantage)
	 (attack :initarg :attack)
	 (defend :initarg :defend)
	 (stunts :initarg :stunts)
	 (stress-tracks :initarg :stress-tracks))
	(:documentation "A description of a skill"))

(defun new-skill-description (name description overcome create-an-advantage attack defend stunts stress-tracks)
	"Creates a new skill"
	(make-instance 'skill-description 
								 :name name 
								 :description description 
								 :overcome overcome 
								 :create-an-advantage create-an-advantage 
								 :attack attack
								 :defend defend 
								 :stunts stunts 
								 :stress-tracks stress-tracks))

(defentity stunt-description ()
	((name :initarg :name)
	 (description :initarg :description)
	 (related-skills :initarg :related-skills)))

(defun new-stunt-description (name description &optional (related-skills nil related-skills-p ))
	"Create a new stunt description"
	(if related-skills-p
			(make-instance 'stunt-description :name name :description description :related-skills '())
			(make-instance 'stunt-description :name name :description description :related-skills related-skills)))


(defclass skill ()
	((skill-id :type uuid :initarg :skill-id)
	 (bonus :initarg :bonus))
	(:documentation	"The bind between a character sheet and a skill description"))


(defclass stress-track () 
	((name :initarg :name)
	 (stress-boxes :initarg :stress-boxes)))

(defclass consequences-slot ()
	((name :initarg :name)
	 (stress-points :initarg :stress-points)
	 (aspect :accessor consequence-aspect)))

(defclass group () 
	((name :initarg :name)
	 (description :initarg :description)
	 (high-concept :accessor group-high-concept)
	 (aspects :accessor group-aspect-list)
	 (stress-tracks :accessor group-stress :documentation "Track the state of a group as the game goes on.")
	 (consequences :accessor group-consequences :documentation "As the pc's or other groupd do battle, they too have consequences for losing"))
	(:documentation "Represents a group that's important to the game."))

(defclass place ()
	((name :initarg :name)
	 (description :initarg :description)
	 (faces :accessor faces-of-the-place))
	(:documentation "Important places for the game"))

(defentity game ()
	((name :initarg :name
				 :initform "New Game")
	 (setting :initarg :setting
						:initform "Setting / Scale")
))
;	 (current-issues :initform '())
;	 (impending-issues :initform '())
;	 (faces :initform '())
;	 (places :initform '())
;	 (number-of-aspects :initform 5)
;	 (number-of-phases :initform 3)
;	 (skill-cap :initform 4)
;	 (skill-organization :initform :pyramid)
;	 (number-of-columns :initform :n-a)
;	 (refresh-rate :initform 3)
;	 (number-of-initial-stunts :initform 3)
;	 (types-of-stress-tracks :initform '('physical 'mental))
;	 (default-number-of-stress-boxes :initform 2)
;	 (skill-list :initform '())
;	 (stunt-list :initform '())
;	 (default-consequence-slots :initform (list '(mild 2) '(moderate 4) '(severe 6)))))

(defun new-game (name setting)
	"Create a new game"
	(let  ((game (make-instance 'game :name name :setting setting)))
		(loop for skill in *default-skill-list* do
				 (add-skill game (new-skill-description
													(name skill)
													(description skill)
													(overcome skill)
													(create-an-advantage skill)
													(attack skill)
													(defend skill)
													(stunts skill)
													(stress-tracks skill))))
		game))

(defmethod add-current-issue ((game game) name)
	(push (make-instance 'aspect :name name) (current-issues game)))

(defmethod add-impending-issue ((game game) name)
	(push (make-instance 'aspect :name name) (impending-issues game)))

(defmethod add-skill ((game game) (skill skill-description))
	"Add a skill to a game, if the skill doesn't already exist (by name), and copying the skill's members, except id."
	(unless (has-skill game (name skill))
		(push (new-skill-description (name skill)
																 (description skill)
																 (overcome skill)
																 (create-an-advantage skill)
																 (attack skill)
																 (defend skill)
																 (stunts skill)
																 (stress-tracks skill))
					(skill-list game))))

(defmethod add-stunt ((game game) (stunt stunt-description))
	"Add a stunt to a game, if it doesn't already exist (by name), and copying the stunt's members, except id."
	(unless (has-stunt game (name stunt))
		(push (new-stunt-description (name stunt)
																 (description stunt)
																 (related-skills stunt))
					(stunt-list game))))

(defmethod add-character-face ((game game) (face-name string) (high-concept-name string))
	"Adds a character as a face to the game.  Only need the name and high concept to start."
	(let ((new-character (make-instance 'character-sheet)))
		(setf (name new-character) face-name) 
		(setf (high-concept new-character) (make-instance 'aspect :name high-concept-name))
		(push new-character (faces game))))

(defmethod add-group-face ((game game) (face-name string) (high-concept-name string))
	"Adds a group as a face to the game.  Only need the name and high concept to start."
	(let ((new-group (make-instance 'group)))
		(setf (name new-group) face-name) 
		(setf (high-concept new-group) (make-instance 'aspect :name high-concept-name))
		(push new-group (faces game))))

(defmethod has-skill ((game game) (name symbol))
	"Find a skill by name, in a game"
	(find-if (lambda (skill)
									(eq name (name skill))) (skill-list game)))

(defmethod has-stunt ((game game) (name symbol))
	"Find a stunt by name, in a game"
	(find-if (lambda (stunt)
									(eq name (name stunt))) (stunt-list game)))

(defentity extra-description ()
	((name :initarg :name)
	 (permissions :initarg :permissions)
	 (costs :initarg :costs)
	 (description :initarg :description)
	 (overcome)
	 (create-an-advantage)
	 (attack)
	 (defend)))

(defclass extra ()
	((extra-id :type uuid :initarg :extra-id)
	 (notes :type 'string))
	(:documentation	"The binding between a character sheet and the extra"))

(defclass stunt ()
	((stunt-id :type uuid :initarg :stunt-id)
	 (notes :type 'string))
	(:documentation "The binding between a character sheet and the stunts"))

(defclass stress-boxes ()
	((stress-box-id :type uuid :initarg :stress-box-id)
	 (boxes)))

(defclass consequence ()
	((name :initarg name)
	 (value :initarg value)
	 (aspect :accessor aspect)))

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