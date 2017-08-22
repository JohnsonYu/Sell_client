import { Animation, PageTransition } from 'ionic-angular'

export class ModalLeaveTransition extends PageTransition {

public init() {
    const ele = this.leavingView.pageRef().nativeElement
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'))
    const window = new Animation(this.plt, ele.querySelector('.window'))

    window.beforeStyles({'opacity': 0})
    wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 0 ,'backgroundColor':'#E58A8A','border-radius':'0px'})
    wrapper.fromTo('transform', 'scale(1)', 'scale(0.02)')
    wrapper.fromTo('margin-left','0vw','85vw')
    wrapper.fromTo('margin-top', '0vh','-13vh')
    wrapper.fromTo('border-radius', '0px',  '200px')
    wrapper.fromTo('height', '100%', '0%')
    wrapper.fromTo('width', '100%', '0%')
    wrapper.fromTo('opacity', 1, .3)
    wrapper.fromTo('backgroundColor','#312520','#E58A8A')

    this.element(this.leavingView.pageRef())
        .duration(800)
        .easing('cubic-bezier(.42, 0, .58, 1)')
        .add(window)
        .add(wrapper)
  }
}
