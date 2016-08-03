My Personal Website
==============================

This is a website made with NodeJS, ExpressJS and other Bower and NPM packages. It is a simple design of
a personal website containing a portfolio, curriculum vitae, blog contact info etc. as well as a simple
API for personal needs (e.g. serving data).

This documentation was made to show how this website was hosted and can be used as a reference for 
deploying other **simple websites**, like this one.



## Deployment on Azure

On the powershell terminal in the Azure Portal type the following:

```
cd \home
git clone https://github.com/karadalex/alexkaradimos.me.git app
npm install -g bower pm2
npm install
bower install
```

to check your files and system environment, settings, processes etc., you can head to 
`https://{appname}.scm.azurewebsites.net/DebugConsole` in your browser