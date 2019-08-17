package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jbelmont/software-security/routes"
)

func getRouter() *mux.Router {
	return routes.NewRouter()
}

func main() {
	router := getRouter()

	log.Fatal(http.ListenAndServe(":8080", router))
}
