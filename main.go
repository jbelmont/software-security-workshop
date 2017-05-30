package main

import (
	"log"
	"net/http"

	"github.com/Code-Craftsmanship-Saturdays/software-security/routes"
	"github.com/gorilla/mux"
)

func getRouter() *mux.Router {
	return routes.NewRouter()
}

func main() {
	router := getRouter()

	log.Fatal(http.ListenAndServe(":8080", router))
}
