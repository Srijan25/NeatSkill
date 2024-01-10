import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
        projectId: "skills-54912",
        clientEmail: "sahksrijan2002@gmail.com",
        privateKey: "nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDImpHSRoy6FciM\njw//IVBi6h3Ty+GUE5pu2L2zkV7ox7o/HtnljsJTRZiULoGtVfQ6VBzA8aC1/zyC\nd4LyoLYJAZglyUPOsFHGkGXprIeBtKgUJ63X77WD6UmJBySKRWDzpBcXy9Z9p4r1\nZmHVVWVAzY9z8bRRaQnsQK69lGvRcsSBqlVa34QDyYjhMEETV/8zHS8cPDKXAkA/\nVcaPS6GmU7DzFvxiuL+ufwRohvxHHW8/XuB+BxWbVTi8BCekHihrspgJbCi5dadp\nMsGs4STca1umXrzhlYIGOt+h+mO75/cmxyT7apWb5PKcu+E3Mr5P3gyu71fBsSal\nV2KZ6eXxAgMBAAECggEAEPI5zYhaYzse3EmwZ/TIMsSLRrT4KYdEajosc4rQXs+S\n7lOGKowv4oZd3tRU7eMo3nQnkuCpzmYXr8yck8mIYMqXlnpiArss+7flqOLpwy1g\nCFMK+20x3MksbJzdW3VQvOEVdrp1NEIFWgWCaaatBvEc8R/JUObglZ3BntAQeAdy\nXDA8GjLsE3hZWgfzyUjHGt/8DxriDQSmNOv8nvow3I1srKpra7FeboVIIzwHAkZo\nAb9ch5C6kHziTz+0JvjEuu2AaF3wm1BxUi6a+JluIvOMNDTzOWMau/0zpm05a6rg\noOw86T/nQD05LlJPunMAghLQoef+JOF70QBbWWKYfwKBgQDm/4f4pMwYAxPvvXt+\nL4jhqpmKRQSDabbsgKX4AqFnEYmTObWDftSTMv5B4KZzQ7/b2JJYwUQjdxxYbGk/\nBZbwYQoobhl79pQNL4VNANei2xjc28RCOVbJJm8z6suLFs4e16ukvUIawc3BbppC\nQVOSEskWTQJd1JZnyGVAWRYetwKBgQDeUN/ssCDT/iybE+7wo2hCTkLfo+qnl+3O\nFrXD5bpQZAeg1+/EnggwbV3fn9hUhpSx7UkdzxRGyJXpaNZ63n3Mt9hD6BDTRuK9\nAr4u2obsdKtZGAVhbUJ1F0Sz7l83TcMufwl5lIU5VjSNwqj5IEu6erujy+JUVh1m\nXn+ZVEh4lwKBgHLCupuVy+uWA96UJXkgRoHOjq858K8U4xMGKu5W6DbbaJzjC8GD\nTjq/F8BEyozzOKsRIkvD4IU6FLP9UCBGN6G+pBxH7pM+gnk2haQm6fp3nReEezFn\naS1P0elaGbtFHiwGe7jBacj/Rah2uV53M/ybJpnUsntJNVvkHCFm4O1rAoGBAMFU\nU2bhQ6sXPnMdwoxBjkkbBcy2HznfRU4TMb5J6NxAIOIe5sN1Kmnysc/mkZnv7x9L\n2mmxy1BC3xs7sEjpczy0I73p8bfJzSPRXtIf93VpgBjaatNu0HxC39wZT3Qoi7PD\nhdnU7oYOEWW2AnujOjfQw5yNkSUGPkrnos8UHHHBAoGAWuudr6A1uczTaII9T0Db\nj4RLgLQwmrYdzONJAisrfzr/68tXSyRoVLeBhfDLzdsZKTX2Gu3EEwCjvf6YDWrt\nGEUd7XY2PmLlOBjOta7n4eRL7AyF+/cOjPceJxW7+p3mFqv3RIKEe+zpWMHKm5K8\nnCBwQUkoUhRL85YKKEQ+Fvs="
      })
}


export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}

