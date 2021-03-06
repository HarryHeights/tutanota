// @flow
import m from "mithril"
import {header} from "./gui/base/Header"
import {modal} from "./gui/base/Modal"
import {assertMainOrNodeBoot} from "./api/Env"
import {overlay} from "./gui/base/Overlay"

assertMainOrNodeBoot()

class RootView {
	view: Function;
	viewCache: {[key: string]: Function};

	constructor() {
		this.viewCache = {}

		this.view = (vnode): VirtualElement => {
			return m("#root", [
				m(overlay),
				m(header),
				m(modal),
				vnode.children
			])
		}
	}
}


export const root: RootView = new RootView()