;; -*- lisp-version: "9.0 [Windows] (Sep 7, 2012 15:37)"; cg: "9.0"; -*-

(in-package :cg-user)

(define-project :name :fate3
  :modules (list (make-instance 'module :name "src/lisp/package.lisp")
                 (make-instance 'module :name "src/lisp/configuration.lisp")
                 (make-instance 'module :name "src/lisp/bootstrap.lisp")
                 (make-instance 'module :name "src/lisp/url-dispatch.lisp")
                 (make-instance 'module :name "src/lisp/default-data.lisp")
                 (make-instance 'module :name "src/lisp/ht-routes.lisp")
                 (make-instance 'module :name "src/lisp/models.lisp")
                 (make-instance 'module :name "src/lisp/repository.lisp")
                 (make-instance 'module :name "src/lisp/urls.lisp"))
  :projects nil
  :libraries nil
  :editable-files nil
  :distributed-files nil
  :internally-loaded-files nil
  :project-package-name :fate3
  :main-form nil
  :compilation-unit t
  :concatenate-project-fasls nil
  :verbose nil
  :runtime-modules (list :cg-dde-utils :cg.base)
  :splash-file-module (make-instance 'build-module :name "")
  :icon-file-module (make-instance 'build-module :name "")
  :include-flags (list :top-level :debugger)
  :build-flags (list :allow-runtime-debug :runtime-bundle)
  :autoload-warning nil
  :full-recompile-for-runtime-conditionalizations nil
  :include-manifest-file-for-visual-styles t
  :default-command-line-arguments "+M +t \"Console for Debugging\""
  :additional-build-lisp-image-arguments (list :read-init-files nil)
  :old-space-size 256000
  :new-space-size 6144
  :runtime-build-option :standard
  :build-number 0
  :run-with-console nil
  :project-file-version-info nil
  :on-initialization 'default-init-function
  :default-error-handler-for-delivery 'report-unexpected-error-and-exit
  :on-restart 'do-default-restart)

;; End of Project Definition
