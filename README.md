# Front-end settings

```
- git clone "link to projecr repository"

- stable version of nodejs with npm is mandatory.

- run in terminal, opened in project folder <strong>npm install</strong> or <strong>npm i</strong>

- for script/styles editing run "webpack" or "npm start" in terminal

```

# Including script into different project:

- add 

```<script>
	(function(w, d, s, l, i){
      		w['IssueReportingToolObject'] = {};
      		w[i] = (key, value) => {
      			w['IssueReportingToolObject'][key] = value;
      		};
      
      		let a = d.createElement(s);
      		let m = d.getElementsByTagName(s)[0];
      		a.async=1;
      		a.src=l;
      		m.parentNode.insertBefore(a,m)
      	})(window, document,'script', link to widget script on prod, 'irt');
</script>   
```
after closed **body** tag tag;

- for extra widget setting possible to run global function 	**irt(key, value)**;
  observe global object <strong>IssueReportingToolObject</strong>, there should appears properties key: value;
      	




