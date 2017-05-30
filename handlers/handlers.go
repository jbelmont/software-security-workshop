package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/Code-Craftsmanship-Saturdays/software-security/model"
)

func UsersIndex(w http.ResponseWriter, r *http.Request) {
	users := json.NewEncoder(w).Encode(model.GetUsers())
	fmt.Fprintln(w, users)
}
