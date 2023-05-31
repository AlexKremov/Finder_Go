package main

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func main() {
	res, err := http.Get("https://go.dev/")
	defer res.Body.Close()

	if err != nil {
		fmt.Println("Err", err)
	}

	doc, _ := goquery.NewDocumentFromReader(res.Body)
	doc.Find("a").Each(func(index int, item *goquery.Selection) {
		attr, _ := item.Attr("href")
		urls := item.Text()
		if strings.Contains(strings.ToLower(urls), "go") || strings.Contains(attr, "go") {
			fmt.Println(attr)
		}
	})
}
