(in-package :fate3)

(defvar *adjective-ladder* (list '(legendary 8)
														 '(epic 7)
														 '(fantastic 6)
														 '(superb 5)
														 '(great 4)
														 '(good 3)
														 '(fair 2)
														 '(average 1)
														 '(mediocre 0)
														 '(poor -1)
														 '(terrible -2)))
;(defun shifts-to-adjective ( shifts)
;	"Convert the number of shifts to the adjective"
;	(

(defparameter athletics-skill-description 	 (new-skill-description 'athletics 
							"The Athletics skill represents your character's general level of physical fitness"
							"Athletics allows you to overcome an obstacle that requires physical movement - jumping, running, climbing, swimming, etc."
							"When you're creating an advantage with Athletics, you're jumping to high groun, running faster than the opponent can keep up with, or performing dazzling acrobatic maneuvers in order to confuse your foe."
							nil
							"Athletics is a catch-all skill to roll for defense in a physical conflict, against close-quarters and ranged attacks."
							nil
							nil))

(defparameter sprinter-stunt-description (new-stunt-description 
									'sprinter 
									"You move two zones for free in a conflict without rolling, instead of once" 
									(list athletics-skill-description)))

(defvar *default-skill-list* (list athletics-skill-description))

(defvar *default-stunt-list* '(sprinter-stunt-description))