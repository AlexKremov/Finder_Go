package main

import (
	"flag"
	"fmt"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func main() {
	var searchWord, searchSite string
	flag.StringVar(&searchWord, "w", "go", "search word")
	flag.StringVar(&searchSite, "s", "https://go.dev/", "search site")
	flag.Parse()

	res, err := http.Get(searchSite)

	if err != nil {
		fmt.Println("Err", err)
	}

	defer res.Body.Close()

	doc, _ := goquery.NewDocumentFromReader(res.Body)
	doc.Find("a").Each(func(index int, item *goquery.Selection) {
		attr, _ := item.Attr("href")
		urls := item.Text()
		if strings.Contains(strings.ToLower(urls), searchWord) || strings.Contains(attr, searchWord) {
			fmt.Println(attr)
		}
	})
}
