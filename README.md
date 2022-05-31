# Msk

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

## Structure

```
.
└── root
    ├── apps
    │    ├── web-api (nestjs)
    │    └── web-app (angular)
    └── libs
        ├── api (dir)
        │    ├── web-api (dir)
        │    │    ├── core (dir)
        │    │    │    └── feature (nest:lib)
        │    │    └── shared (dir)
        │    │        └── data-access (dir)
        │    │            └── entities (nest:lib, house entities for the entire app)
        │    └── shared (dir)
        ├── client (dir)
        │    ├── web-app (dir)
        │    │    ├── shell (dir)
        │    │    │    ├── core (dir)
        │    │    │    ├── feature (angular:lib) - for configure any forRoot modules
        │    │    │    └── ui
        │    │    │        └── layout (angular:lib)
        │    │    ├── landing (dir)
        │    │    │    └── home (dir)
        │    │    │        ├── features (angular:lib)
        │    │    │        └── ui (dir)
        │    │    ├── auth (dir)
        │    │    │    ├── sign-in (dir)
        │    │    │    │    ├── features (angular:lib)
        │    │    │    │    └── ui (dir)
        │    │    │    └── sign-out (dir)
        │    │    │         ├── features (angular:lib)
        │    │    │         └── ui (dir)
        │    │    ├── admin (dir)
        │    │    │    └── dashboard (dir)
        │    │    │         ├── features (angular:lib)
        │    │    │         └── ui (dir)
        │    │    ├── error (dir)
        │    │    │    ├── internal-server-error (dir)
        │    │    │    │    └── features (angular:lib)
        │    │    │    ├── maintenance (dir)
        │    │    │    │    └── features (angular:lib)
        │    │    │    └── not-found (dir)
        │    │    │         └── features (angular:lib)
        │    │    └── shared (dir)
        │    │            ├── data-access (angular:lib, API call, Service or State management to share across the Client app)
        │    │            ├── ui (dir)
        │    │            ├── pipes (dir)
        │    │            ├── services (dir)
        │    │            ├── directives (dir)
        │    │            └── utils (angular:lib, usually shared Guards, Interceptors, Validators...)
        │    └── shared (dir)
        │        ├── animations (angular:lib animations)
        │        ├── app-config (injection token for environment)
        │        ├── assets (dir)
        │        ├── styles (dir)
        │        ├── tailwind-preset (optional dir, if I have multiple client apps)
        │        ├── ui (optional dir, if I have multiple client apps)
        │        ├── pipes (optional dir, if I have multiple client apps)
        │        ├── services (optional dir, if I have multiple client apps)
        │        ├── directives (optional dir, if I have multiple client apps)
        │        ├── validators (optional dir, if I have multiple client apps)
        │        └── utils (optional dir, if I have multiple client apps)
        └── shared (dir)
            └── utils (optional dir, usually validation logic or shared utilities)
```
