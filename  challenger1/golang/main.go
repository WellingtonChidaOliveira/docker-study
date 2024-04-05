package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Full Cycle Rocks!</h1>")
}

func main(){
	r := mux.NewRouter()
	r.HandleFunc("/", helloWorld)
	fmt.Println("Server listening on port 3000")
	http.ListenAndServe(":3000", r)
}