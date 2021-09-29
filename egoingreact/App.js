import react, { Component } from 'react';
import './App.css';

import TOC from "./Component/TOC"
import ReadContent from "./Component/ReadContent"
import CreateContent from "./Component/CreateContent"
import UpdateContent from "./Component/UpdateContent"
import Subject from "./Component/Subject"
import Control from "./Component/Control"

class App extends Component {
	constructor(props){
		super(props);
		this.max_content_id = 3;
		this.state = {
			mode: 'read',
			selected_content_id:2,
			subject:{title:'WEB', sub:'World Wide Web!'},
			welcome:{title: 'Welcome', desc:'Hello, React!!'},
			contents:[
				{id:1, title: 'HTML', desc:'HTML is for information'},
				{id:2, title: 'CSS', desc:'CSS is for design'},
				{id:3, title: 'JavaScript', desc:'JavaScript is for interactive'}
			]
		}
	}
	getReadContent(){
		var i = 0;
			while(i < this.state.contents.length){
				var data = this.state.contents[i];
				if(data.id === this.state.selected_content_id) {
					return data
					break;
				}
				i = i + 1;
			}
	}
	getContent(){
		console.log('App render');
		var _title, _desc, _article = null;
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContent title={_title} desc={_desc}></ReadContent>
		} else if(this.state.mode === 'read'){
			var _content = this.getReadContent();
			_article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
		} else if (this.state.mode ==='create'){
			
			_article = <CreateContent onSubmit={function(_title, _desc){
						// add content to this.state.contents
						this.max_content_id = this.max_content_id + 1;
						// this.state.contents.push(
						// {id:this.max_content_id, title: _title, desc: _desc}
						// 	);
						var _contents = Array.from(this.state.contents);
						_contents.push({id:this.max_content_id, title: _title, desc: _desc});
						this.setState({
							coantents:_contents,
							mode:'read',
							selected_content_id:this.max_content_id
						});
					}.bind(this)}
						></CreateContent>
		}else if (this.state.mode ==='update'){
			_content = this.getReadContent();
			_article = <UpdateContent data={_content} onSubmit={
						function(_id, _title, _desc){
						var _contents = Array.from(this.state.contents);
						var i = 0;
							while(i < _contents.length){
								if(_contents[i].id === _id) {
									_contents[i] = {id:_id, title: _title, desc: _desc}
									break;
								}
								i = i + 1;
							}
						this.setState({
							contents:_contents,
							mode: 'read'
						});
					}.bind(this)}
						></UpdateContent>
		}
		return(_article)
	}
	render() {
		
		return (
			<div className="App">
				<Subject 
					title = {this.state.subject.title} 
					sub = {this.state.subject.sub}
					onChangePage={function(){
						this.setState({mode:'welcome'});
					}.bind(this)}
				>
				</Subject>
				<TOC 
					onChangePage = {function(id){
						this.setState({
							mode:'read',
							selected_content_id:Number(id)
						});
					}.bind(this)}
					data={this.state.contents}></TOC>
				<Control onChangeMode = {function(_mode){
						this.setState({
							mode:_mode
						})
					}.bind(this)}></Control>
				{this.getContent()}
				
			</div>
		);
	}
}
//https://opentutorials.org/module/4058/24861
//강의 - Update 구현 :form 작업 다시 보기... 반영은 거의 되어있는데 좀 다름.
export default App;


