FROM golang:alpine as build

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache git upx binutils && \
    cd golang && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o server && \
    strip --strip-unneeded /usr/src/app/golang/server && \
    upx --best --ultra-brute /usr/src/app/golang/server
    
FROM scratch

WORKDIR /app

COPY --from=build /usr/src/app/golang/server .

CMD ["./server"]