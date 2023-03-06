
# Github User Search

Simple application that allows you to search and view data from Github users using its public API.

The application was developed for the FrontEnd selection process of the company Digital Intelligence Systems.

## Arquitetura

The architecture was based on the principles of SOLID and clean architecture. Containing 5 main layers:
- presentation (code that reflects in the visual interface, React is here)
- domain (interfaces that contain the application's use cases and models)
- data (implementation of domain interfaces)
- infra (dependency inversion of external libraries)
- main (starting point of the application and declaration and connection between the layers)

## Rodando a aplicação

To run the application locally use the command:

```bash
  yarn dev
```





## Rodando os testes

To run the e2e tests, run the following command:

```bash
  yarn cypress:open
```

