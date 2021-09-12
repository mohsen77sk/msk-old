# Msk

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Structure

```
.
└── root
	├── apps
	│	├── web-api (nestjs)
	│	└── web-app (angular)
	└── libs
		├── api (dir)
		│	├── core (dir)
		│	│	└── feature (nest:lib)
		│	├── todo (dir)
		│	│	├── data-access (nest:lib, service)
		│	│	├── feature (nest:lib, module + controller)
		│	│	└── utils (nest:lib, things like interceptors, guards, pipes etc...)
		│	├── note (dir)
		│	│	├── data-access (nest:lib, service)
		│	│	├── feature (nest:lib, module + controller)
		│	│	└── utils (nest:lib, things like interceptors, guards, pipes etc...)
		│	└── shared (dir)
		│		└── data-access (dir)
		│			└── entities (nest:lib, house entities for the entire app)
		├── app (dir)
		│	├── shell (dir)
		│	│	├── feature (angular:lib) - for configure any forRoot modules
		│	│	└── ui
		│	│		└── layout (angular:lib)
		│	├── home (dir)
		│	│	├── features (angular:lib)
		│	│	└── ui (dir)
		│	├── todo (dir)
		│	│	├── data-access (angular:lib, service, API calls, state management)
		│	│	├── features
		│	│	│	├── list (angular:lib listsComponent)
		│	│	│	└── detail (angular:lib DetailComponent)
		│	│	└── ui (dir)
		│	├── note (dir)
		│	│	├── data-access (angular:lib, service, API calls, state management)
		│	│	├── features
		│	│	│	├── list (angular:lib listsComponent)
		│	│	│	└── detail (angular:lib DetailComponent)
		│	│	└── ui (dir)
		│	└── shared (dir)
		│		├── animations (angular:lib animations)
		│		├── app-config (injection token for environment)
		│		├── data-access (angular:lib, API call, Service or State management to share across the Client app)
		│		├── ui (dir)
		│		├── pipes (dir)
		│		├── directives (dir)
		│		└── utils (angular:lib, usually shared Guards, Interceptors, Validators...)
		└── shared (dir, most libs in here are buildable @nrwl/angular:lib)
			├── data-access (my shared data-access is usually models, so it is a lib)
			├── assets (dir)
			├── styles (dir)
			├── ui (optional dir, if I have multiple client apps)
			└── utils (optional dir, usually validation logic or shared utilities)

```
