"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickEdit = function () {
            _this.setState({
                isEdit: true
            });
        };
        _this.handleClickRemove = function () {
            _this.props.deleteTask(_this.props.index);
        };
        _this.handleClickSave = function () {
            var taskName = _this.textId.current.value;
            _this.props.updateTask(_this.props.index, taskName);
            _this.setState({ isEdit: false });
        };
        _this.renderView = function () {
            return (<div className={'box'}>
                <div>{_this.props.children}</div>
                <button onClick={_this.handleClickEdit} className={'btn light'}>Edit</button>
            <button onClick={_this.handleClickRemove} className={'btn red'}>Remove</button>
            </div>);
        };
        _this.renderEdit = function () {
            return (<div className={"box"}>
            <textarea ref={_this.textId}>New Task</textarea>
        <button onClick={_this.handleClickSave} className={"btn success"}>Save</button>
            </div>);
        };
        _this.state = {
            isEdit: false
        };
        _this.textId = react_1.default.createRef();
        return _this;
    }
    Task.prototype.setState = function (arg0) {
        throw new Error("Method not implemented.");
    };
    Task.prototype.render = function () {
        return this.state.isEdit ? this.renderEdit() : this.renderView();
    };
    return Task;
}(react_1.default.Component));
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    function TaskList(props) {
        var _this = _super.call(this, props) || this;
        _this.deleteTask = function (index) {
            var tasks = __spreadArray([], _this.state.tasks, true);
            tasks.splice(index, 1);
            _this.setState({ tasks: tasks });
        };
        _this.updateTask = function (index, content) {
            var tasks = __spreadArray([], _this.state.tasks, true);
            tasks[index] = content;
            _this.setState({ tasks: tasks });
        };
        _this.state = {
            tasks: ['Task 1', 'Task 2', 'Task 3']
        };
        return _this;
    }
    TaskList.prototype.setState = function (arg0) {
        throw new Error("Method not implemented.");
    };
    //TODO: create func for Add Task
    TaskList.prototype.render = function () {
        var _this = this;
        return (<div className={'field'}>
            <button className={'btn new'}>Add Task</button>
        {this.state.tasks.map(function (t, i) { return <Task key={i + 1} index={i} updateTask={_this.updateTask} deleteTask={_this.deleteTask}>{t}</Task>; })}</div>);
    };
    return TaskList;
}(react_1.default.Component));
