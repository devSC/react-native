/**
 * Created by Wilson on 2017/6/30.
 */

/**
 * 定义Student类, export default 是导出方法
 * 和其他类定义使用方法相同.
 * */
export default class Student {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getDescription() {
        return '姓名: ' + this.name + ' 性别: ' + this.sex + ' 年龄: ' + this.age;
    }
}