(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports={Login:"Login_Login__3H5oj",LoginColumn:"Login_LoginColumn__ON6TD",LoginUsername:"Login_LoginUsername__3lFdo",LoginPassword:"Login_LoginPassword__3-Y3W",LoginAttempts:"Login_LoginAttempts__Exqt0",LoginButton:"Login_LoginButton__pgwXL"}},12:function(t,e,n){t.exports={Terminal:"Terminal_Terminal__2_445",Commands:"Terminal_Commands__1kw_W",CommandLine:"Terminal_CommandLine__24cYQ",InvisibleInput:"Terminal_InvisibleInput__3c_Zj"}},16:function(t,e,n){t.exports={Zetatech:"Mainframe_Zetatech__Ytq8b",Background:"Mainframe_Background__kgPpB"}},21:function(t,e,n){"use strict";(function(t){var a=n(6),r=n(7),i=n(9),s=n(8),o=n(10),c=n(1),l=n.n(c),u=n(22),m=n(23),h=n(16),d=n.n(h),f=n(25),p=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(i.a)(this,Object(s.a)(e).call(this,t))).changeLogin=function(t){n.setState({loggedIn:t})},n.state={loggedIn:!1},n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"renderLogin",value:function(){return this.state.loggedIn?l.a.createElement(f.a,null):l.a.createElement(m.a,{loginFunction:this.changeLogin})}},{key:"render",value:function(){return l.a.createElement("div",{className:d.a.Zetatech},l.a.createElement("header",null,l.a.createElement("video",{src:"assets/Background.mp4",autoPlay:!0,className:d.a.Background,loop:!0})),this.renderLogin())}}]),e}(c.Component);e.a=Object(u.hot)(t)(p)}).call(this,n(33)(t))},23:function(t,e,n){"use strict";var a=n(6),r=n(7),i=n(9),s=n(8),o=n(10),c=n(24),l=n.n(c),u=n(1),m=n.n(u),h=n(11),d=n.n(h),f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(i.a)(this,Object(s.a)(e).call(this,t))).changeUsername=function(t){n.setState({username:t.currentTarget.value})},n.changePassword=function(t){n.setState({password:t.currentTarget.value})},n.login=function(){if(n.setState({attempts:n.state.attempts-1}),1!==n.state.attempts){var t=l.a.SHA1(n.state.password);"admin"!==n.state.username||"d5240d4a4b8066612800099ed10f85cb21ec0adf"!==t.toString()||n.props.loginFunction(!0)}else window.location.href="https://www.google.com/#q=What is password?"},n.renderAttempts=function(){if(n.state.attempts<3)return m.a.createElement("p",null,"Wrong credentials. Remaining attempts: ",n.state.attempts)},n.state={attempts:3,password:"",username:""},n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return m.a.createElement("div",{className:d.a.Login},m.a.createElement("div",{className:d.a.LoginUsername},m.a.createElement("h3",null,"Username:"),m.a.createElement("input",{onChange:this.changeUsername})),m.a.createElement("div",{className:d.a.LoginPassword},m.a.createElement("h3",null,"Password:"),m.a.createElement("input",{onChange:this.changePassword,type:"password"})),m.a.createElement("div",{className:d.a.LoginAttempts},this.renderAttempts()),m.a.createElement("button",{className:d.a.LoginButton,onClick:this.login},"Login"))}}]),e}(u.Component);e.a=f},25:function(t,e,n){"use strict";var a=n(6),r=n(7),i=n(9),s=n(8),o=n(10),c=n(1),l=n.n(c),u=n(12),m=n.n(u),h=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(i.a)(this,Object(s.a)(e).call(this,t))).prompt=" \u276f\u276f\u2007",n.structure={folders:[],permission:!1,result:""},n.keyDown=function(t){"Enter"===t.key&&n.execute()},n.changeCurrentCommand=function(t){n.setState({currentCommand:t.currentTarget.value})},n.cls=function(){n.setState({commands:[]})},n.state={commands:[],currentCommand:"",currentFolder:{folders:[],permission:!1,result:""},currentPath:"/home/mainframe "},n.getFolderStructure(),n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"getFolderStructure",value:function(){var t=this;fetch("MainframeStructure.json").then(function(e){return e.json().then(function(e){var n=e.folders.home.folders.mainframe;t.setState({currentFolder:n}),t.structure=e})})}},{key:"cat",value:function(){var t=this.state.currentCommand.split(" ")[1],e=this.state.currentFolder.folders[t];null!=e&&!0===e.file&&!0===e.permission?this.print(e.result):null!=e&&!1===e.file?this.print(t+" is not a file."):null!=e&&!0===e.file&&!1===e.permission?this.print("Permission denied."):this.print("File does not exist.")}},{key:"parentDirectory",value:function(){if("/"!==this.state.currentPath.trim()){var t=this.state.currentPath.split("/");t=t.splice(1,t.length-2);var e=this.structure;if(t.length>0){var n=!0,a=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;e=e.folders[o]}}catch(c){a=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}}null!=e&&this.setState({currentFolder:e,currentPath:this.state.currentPath.replace(RegExp("/[^/]*$"),"")})}else this.print("Parent directory above root does not exist.")}},{key:"changeDirectry",value:function(){if(this.state.currentCommand.endsWith(" .."))this.parentDirectory();else{var t=this.state.currentCommand.split(" ")[1],e=this.state.currentFolder.folders[t];null!=e&&!0===e.permission&&!1===e.file?this.setState({currentFolder:e,currentPath:this.state.currentPath.trim()+"/"+t}):null!=e&&!1===e.permission?this.print("Permission denied."):this.print(t+" does not exist or is not a folder.")}}},{key:"ls",value:function(){var t="";for(var e in this.state.currentFolder.folders)null!=e&&(t+=e+" \u2007 ");this.print(t)}},{key:"executeFile",value:function(){var t=this.state.currentCommand.split("/")[1],e=this.state.currentFolder.folders[t];null!=e&&!0===e.permission&&!0===e.file&&t.endsWith(".exe")?this.print(e.execute):null!=e&&!0===e.permission&&!0===e.file&&t.endsWith(".Site")?window.location.href=e.execute:this.print("File is not executable.")}},{key:"execute",value:function(){var t=this.state.currentCommand.trim();t.toLowerCase().startsWith("./")?this.executeFile():t.toLowerCase().startsWith("cat")?this.cat():"cls"===t.toLowerCase()?this.cls():t.toLowerCase().startsWith("exit")?this.print("Wolf.exe is running by another user. Exiting module before terminating could be dangerous for plugged in users. \n EXIT ABORTED..."):t.startsWith("cd")?this.changeDirectry():t.toLowerCase().indexOf("shit")>-1?this.print("Stop being angry."):t.toLowerCase().indexOf("fuck you")>-1?this.print("No, fuck YOU!"):t.toLowerCase().startsWith("fuck")?this.print("You can't fuck this."):t.toLowerCase().startsWith("shut down")?this.print("Shutting down the mainframe with users logged into their Cyberdecks is extremely dangerous. \nShut down sequence terminated."):t.toLowerCase().startsWith("ls")?this.ls():"help"===t.toLowerCase()?this.print("The following commands are available: \n ./[file] \n cat [file] \n cls \n cd [folder] \n ls \n help"):""===t?this.print(""):this.print("Command not found: "+this.state.currentCommand),this.setState({currentCommand:""})}},{key:"print",value:function(t){var e=t.split("\n"),n=!0,a=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value;n?(this.state.commands.push({command:this.state.currentPath+this.prompt+this.state.currentCommand,result:c}),n=!1):this.state.commands.push({command:"",result:c})}}catch(l){r=!0,i=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:m.a.Terminal},l.a.createElement("div",{id:"Terminal",className:m.a.Commands},this.state.commands.map(function(e){return l.a.createElement("div",{key:t.state.commands.indexOf(e)},l.a.createElement("p",null,e.command),l.a.createElement("p",null,e.result))}),l.a.createElement("div",{className:m.a.CommandLine},this.state.currentPath+this.prompt,l.a.createElement("input",{onKeyDown:this.keyDown,className:m.a.InvisibleInput,value:this.state.currentCommand,onChange:this.changeCurrentCommand}))))}}]),e}(c.Component);e.a=h},26:function(t,e,n){t.exports=n(61)},31:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(20),s=n.n(i),o=(n(31),n(21));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.c4903b29.chunk.js.map