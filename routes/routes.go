package routes

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gorilla/mux"

	"github.com/Code-Craftsmanship-Saturdays/software-security/handlers"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

type MyHandler struct {
	sync.Mutex
	count int
}

func (h *MyHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	var count int
	h.Lock()
	h.count++
	count = h.count
	h.Unlock()

	fmt.Fprintf(w, "Visitor count: %d.", count)
}

func NewRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)
	}

	return router
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		handlers.UsersIndex,
	},
}
