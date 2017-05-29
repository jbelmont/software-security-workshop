package main

import (
	"net/http/httptest"
	"testing"
)

func TestHandler(t *testing.T) {
	server := httptest.NewServer(handler)
	defer server.Close()
}
