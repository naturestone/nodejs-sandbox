BASEDIR=$(pwd)

if [ -d "$BASEDIR/ssl" ]
then
    openssl genrsa -out ssl/key.pem
    openssl req -new -key ssl/key.pem -out ssl/csr.pem
    openssl x509 -req -days 1095 -in ssl/csr.pem -signkey ssl/key.pem -out ssl/cert.pem
    mv ssl/csr.pem ssl/csr.pem.DEPRECATED
else
    echo "Kein SSL-Verzeichnis gefunden in: $BASEDIR!"
fi
