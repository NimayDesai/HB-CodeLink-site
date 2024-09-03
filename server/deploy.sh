echo What should the version be?
read VERSION

docker build -t thepaladinaoe2/codelink:$VERSION .
docker push thepaladinaoe2/codelink:$VERSION

ssh root@157.230.219.115 "dokku git:from-image api thepaladinaoe2/codelink:$VERSION" 