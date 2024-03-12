const { get } = axios

export const googleBookService = {
    query
}

function query(txt = 'the book thief') {
    // return Promise.resolve(booksFromGoogle)
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${txt}`
    return get(url)
        .then(res => res.data.items)
}


const booksFromGoogle = [
    {
        "kind": "books#volume",
        "id": "F-p_0AEACAAJ",
        "etag": "JSxIVbdK8EQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/F-p_0AEACAAJ",
        "volumeInfo": {
            "title": "Alice Oseman Six-Book Collection Boxset",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "Harper Fire",
            "publishedDate": "2024-10-10",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0008669651"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780008669652"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 0,
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=F-p_0AEACAAJ&dq=alice+oseman&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=F-p_0AEACAAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Alice_Oseman_Six_Book_Collection_Boxset.html?hl=&id=F-p_0AEACAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=F-p_0AEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        }
    },
    {
        "kind": "books#volume",
        "id": "-jY60AEACAAJ",
        "etag": "axvG07/PXSs",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/-jY60AEACAAJ",
        "volumeInfo": {
            "title": "Alice Oseman Pack",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "HarperCollins Children's Books",
            "publishedDate": "2024-02-29",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0008684111"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780008684112"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 0,
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=-jY60AEACAAJ&dq=alice+oseman&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=-jY60AEACAAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Alice_Oseman_Pack.html?hl=&id=-jY60AEACAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=-jY60AEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        }
    },
    {
        "kind": "books#volume",
        "id": "rZwFDgAAQBAJ",
        "etag": "lPWT/t0ysA8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/rZwFDgAAQBAJ",
        "volumeInfo": {
            "title": "I Was Born for This",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "HarperCollins UK",
            "publishedDate": "2018-05-03",
            "description": "The third novel by the phenomenally talented Alice Oseman, the author of the 2021 YA Book Prize winning Loveless, Solitaire and graphic novel series Heartstopper – now a major Netflix series.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780008244101"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0008244103"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 354,
            "printType": "BOOK",
            "categories": [
                "Young Adult Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.9.10.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=rZwFDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=rZwFDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=rZwFDgAAQBAJ&printsec=frontcover&dq=alice+oseman&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=rZwFDgAAQBAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/I_Was_Born_for_This.html?hl=&id=rZwFDgAAQBAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/I_Was_Born_for_This-sample-epub.acsm?id=rZwFDgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=rZwFDgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "The third novel by the phenomenally talented Alice Oseman, the author of the 2021 YA Book Prize winning Loveless, Solitaire and graphic novel series Heartstopper – now a major Netflix series."
        }
    },
    {
        "kind": "books#volume",
        "id": "eYwzCgAAQBAJ",
        "etag": "wm3L49Vn6SY",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/eYwzCgAAQBAJ",
        "volumeInfo": {
            "title": "This Winter (A Heartstopper novella)",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "HarperCollins UK",
            "publishedDate": "2015-11-05",
            "description": "A short novella based on the beloved characters from Alice Oseman’s acclaimed debut novel Solitaire and graphic novel series Heartstopper – soon to be a major Netflix series. From the author of the 2021 YA Book Prize winning Loveless.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780008147884"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0008147884"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 120,
            "printType": "BOOK",
            "categories": [
                "Young Adult Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.12.11.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=eYwzCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=eYwzCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=eYwzCgAAQBAJ&printsec=frontcover&dq=alice+oseman&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=eYwzCgAAQBAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/This_Winter_A_Heartstopper_novella.html?hl=&id=eYwzCgAAQBAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/This_Winter_A_Heartstopper_novella-sample-epub.acsm?id=eYwzCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=eYwzCgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "A short novella based on the beloved characters from Alice Oseman’s acclaimed debut novel Solitaire and graphic novel series Heartstopper – now a major Netflix series. From the author of the 2021 YA Book Prize winning Loveless."
        }
    },
    {
        "kind": "books#volume",
        "id": "_IG3EAAAQBAJ",
        "etag": "0fnwxHkKxI8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/_IG3EAAAQBAJ",
        "volumeInfo": {
            "title": "Heartstopper #5: A Graphic Novel",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "Scholastic Inc.",
            "publishedDate": "2023-12-19",
            "description": "*Now an acclaimed live-action Netflix series!* Boy meets boy. Boys become friends. Boys fall in love. The bestselling LGBTQ+ graphic novel about life, love, and everything that happens in between: this is the fifth volume of the much-loved HEARTSTOPPER series, featuring gorgeous two-color artwork. Nick and Charlie are in love. They’ve finally said those three little words, and Charlie has almost persuaded his mum to let him sleep over at Nick’s house. He wants to take their relationship to the next level... but can he find the confidence he needs? And with Nick going off to university next year, is everything about to change? By Alice Oseman, winner of the YA Book Prize, Heartstopper encompasses all the small moments of Nick and Charlie’s lives that together make up something larger, which speaks to all of us. Contains discussions around mental health and eating disorders, and sexual references.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781338807516"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "133880751X"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 338,
            "printType": "BOOK",
            "categories": [
                "Young Adult Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.6.5.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": true,
                "containsImageBubbles": true,
                "epubBubbleVersion": "457a08d0ef120e8b_A",
                "imageBubbleVersion": "457a08d0ef120e8b_A"
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=_IG3EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=_IG3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=_IG3EAAAQBAJ&printsec=frontcover&dq=alice+oseman&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=_IG3EAAAQBAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Heartstopper_5_A_Graphic_Novel.html?hl=&id=_IG3EAAAQBAJ",
            "seriesInfo": {
                "kind": "books#volume_series_info",
                "bookDisplayNumber": "5",
                "volumeSeries": [
                    {
                        "seriesId": "zBgqGwAAABDnAM",
                        "seriesBookType": "ISSUE",
                        "orderNumber": 5
                    }
                ]
            }
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Heartstopper_5_A_Graphic_Novel-sample-epub.acsm?id=_IG3EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Heartstopper_5_A_Graphic_Novel-sample-pdf.acsm?id=_IG3EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=_IG3EAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Boys become friends. Boys fall in love. The bestselling LGBTQ+ graphic novel about life, love, and everything that happens in between: this is the fifth volume of the much-loved HEARTSTOPPER series, featuring gorgeous two-color artwork."
        }
    },
    {
        "kind": "books#volume",
        "id": "ZGeeDAAAQBAJ",
        "etag": "AOsZOTVqofg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/ZGeeDAAAQBAJ",
        "volumeInfo": {
            "title": "Radio Silence",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "HarperCollins",
            "publishedDate": "2017-03-28",
            "description": "The second novel by the phenomenally talented Alice Oseman, the author of the million-copy bestselling Heartstopper books—now a major Netflix series. What if everything you set yourself up to be was wrong? Frances has always been a study machine with one goal: elite university. Nothing will stand in her way. Not friends, not a guilty secret—not even the person she is on the inside. But when Frances meets Aled, the shy genius behind her favorite podcast, she discovers a new freedom. He unlocks the door to Real Frances and for the first time she experiences true friendship, unafraid to be herself. Then the podcast goes viral and the fragile trust between them is broken. Caught between who she was and who she longs to be, Frances’s dreams come crashing down. Suffocating with guilt, she knows that she has to confront her past… She has to confess why Carys disappeared… Meanwhile at university, Aled is alone, fighting even darker secrets. It’s only by facing up to your fears that you can overcome them. And it’s only by being your true self that you can find happiness. Frances is going to need every bit of courage she has. A coming-of-age read that tackles issues of identity, the pressure to succeed, diversity, and freedom to choose, Radio Silence is a tour de force by the most exciting writer of her generation.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780062335739"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0062335731"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 283,
            "printType": "BOOK",
            "categories": [
                "Young Adult Fiction"
            ],
            "averageRating": 5,
            "ratingsCount": 1,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.6.5.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ZGeeDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ZGeeDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=ZGeeDAAAQBAJ&printsec=frontcover&dq=alice+oseman&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=ZGeeDAAAQBAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Radio_Silence.html?hl=&id=ZGeeDAAAQBAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Radio_Silence-sample-epub.acsm?id=ZGeeDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=ZGeeDAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "The second novel by the phenomenally talented Alice Oseman, the author of the million-copy bestselling Heartstopper books—now a major Netflix series."
        }
    },
    {
        "kind": "books#volume",
        "id": "e5V1DwAAQBAJ",
        "etag": "uP8dWx0pzbM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/e5V1DwAAQBAJ",
        "volumeInfo": {
            "title": "Heartstopper Volume 2",
            "subtitle": "The bestselling graphic novel, now on Netflix!",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "Hachette UK",
            "publishedDate": "2019-07-11",
            "description": "*Now an acclaimed live-action Netflix series!* *Heartstopper Volumes 1-4 out now, Volume 5 coming soon.* Boy meets boy. Boys become friends. Boys fall in love. An LGBTQ+ graphic novel about life, love, and everything that happens in between: this is the second volume of the bestselling HEARTSTOPPER series. *Includes exclusive Tara/Darcy story!* 'Absolutely delightful. Sweet, romantic, kind. Beautifully paced. I loved this book.' RAINBOW ROWELL, author of Carry On Nick and Charlie are best friends. Nick knows Charlie's gay, and Charlie is sure that Nick isn't. But love works in surprising ways, and Nick is discovering all kinds of things about his friends, his family ... and himself. By Alice Oseman, winner of the YA Book Prize, Heartstopper is about friendship, loyalty and mental illness. It encompasses all the small moments of Nick and Charlie's lives that together make up something larger, which speaks to all of us. 'The queer graphic novel we wished we had at high school.' Gay Times Heartstopper was Children's #1 bestseller in the TCM chart on 23 April 2022.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781444951417"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1444951416"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 323,
            "printType": "BOOK",
            "categories": [
                "Juvenile Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "3.9.7.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=e5V1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=e5V1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=e5V1DwAAQBAJ&printsec=frontcover&dq=alice+oseman&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=e5V1DwAAQBAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Heartstopper_Volume_2.html?hl=&id=e5V1DwAAQBAJ",
            "seriesInfo": {
                "kind": "books#volume_series_info",
                "shortSeriesBookTitle": "The million-copy bestselling series, now on Netflix!",
                "bookDisplayNumber": "2",
                "volumeSeries": [
                    {
                        "seriesId": "H3gsGwAAABAyYM",
                        "seriesBookType": "COLLECTED_EDITION",
                        "orderNumber": 2,
                        "issue": [
                            {
                                "issueDisplayNumber": "1"
                            }
                        ]
                    }
                ]
            }
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Heartstopper_Volume_2-sample-epub.acsm?id=e5V1DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Heartstopper_Volume_2-sample-pdf.acsm?id=e5V1DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=e5V1DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Sweet, romantic, kind. Beautifully paced. I loved this book.&#39; RAINBOW ROWELL, author of Carry On Nick and Charlie are best friends. Nick knows Charlie&#39;s gay, and Charlie is sure that Nick isn&#39;t."
        }
    },
    {
        "kind": "books#volume",
        "id": "iDCcDwAAQBAJ",
        "etag": "opMbK5hjWJE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/iDCcDwAAQBAJ",
        "volumeInfo": {
            "title": "Heartstopper Volume 3",
            "subtitle": "The bestselling graphic novel, now on Netflix!",
            "authors": [
                "Alice Oseman"
            ],
            "publisher": "Hachette UK",
            "publishedDate": "2020-02-06",
            "description": "*Now an acclaimed live-action Netflix series!* *Heartstopper Volumes 1-4 out now, Volume 5 coming soon.* Boy meets boy. Boys become friends. Boys fall in love. An LGBTQ+ graphic novel about life, love, and everything that happens in between: this is the third volume of the bestselling HEARTSTOPPER series. *Includes exclusive Tao/Elle mini-comic!* 'Absolutely delightful. Sweet, romantic, kind. Beautifully paced. I loved this book.' RAINBOW ROWELL, author of Carry On Charlie didn't think Nick could ever like him back, but now they're officially boyfriends. Nick's even found the courage to come out to his mum. But coming out isn't just something that happens once - there's Nick's older brother, and a school trip to Paris, not to mention all the other friends and family - and life can be hard, even with someone who loves you by your side. As their feelings get more serious, Charlie and Nick will need each other more than ever before. By Alice Oseman, winner of the YA Book Prize, Heartstopper is about love, friendship, loyalty and mental illness. It encompasses all the small moments of Nick and Charlie's lives that together make up something larger, which speaks to all of us. Contains discussions about mental health, eating disorders and a reference to past self-harm. 'The queer graphic novel we wished we had at high school.' Gay Times Heartstopper was Children's #1 bestseller in the TCM chart on 23 April 2022.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781444952780"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1444952781"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 387,
            "printType": "BOOK",
            "categories": [
                "Juvenile Fiction"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.9.8.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=iDCcDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=iDCcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=iDCcDwAAQBAJ&printsec=frontcover&dq=alice+oseman&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=iDCcDwAAQBAJ&dq=alice+oseman&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Heartstopper_Volume_3.html?hl=&id=iDCcDwAAQBAJ",
            "seriesInfo": {
                "kind": "books#volume_series_info",
                "shortSeriesBookTitle": "The million-copy bestselling series, now on Netflix!",
                "bookDisplayNumber": "3",
                "volumeSeries": [
                    {
                        "seriesId": "H3gsGwAAABAyYM",
                        "seriesBookType": "COLLECTED_EDITION",
                        "orderNumber": 3,
                        "issue": [
                            {
                                "issueDisplayNumber": "1"
                            }
                        ]
                    }
                ]
            }
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Heartstopper_Volume_3-sample-epub.acsm?id=iDCcDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Heartstopper_Volume_3-sample-pdf.acsm?id=iDCcDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=iDCcDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Sweet, romantic, kind. Beautifully paced. I loved this book.&#39; RAINBOW ROWELL, author of Carry On Charlie didn&#39;t think Nick could ever like him back, but now they&#39;re officially boyfriends."
        }
    }]