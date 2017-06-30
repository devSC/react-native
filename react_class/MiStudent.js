/**
 * Created by Wilson on 2017/6/30.
 */

import Student from './Student'

export default class MiStudent extends Student {
    constructor() {
        super('小米', '女', 16)
    }

    //重写父类方法
    getDescription() {
        return '呵呵 ' + super.getDescription()
    }
}