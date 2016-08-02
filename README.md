# Composr perf tests

## Init

_Requires having [corbel-composr](https://www.npmjs.com/package/corbel-composr) installed as a global package_

`PM2=true corbel-composr`

### See logs  

`pm2 logs` or `tail -f logs/composr.log`

## Attack

This project uses [vegeta](https://github.com/tsenart/vegeta) to create graphs with the results

Use any of the targets inside the `targets` folder.

```
vegeta attack -duration=3600s -rate=10 -targets=targets/targetCached.txt > results.bin
```

## Generate reports

```
cat results.bin | vegeta report -reporter=plot > plot.html
```


## Generate more endpoints

Run `composr -g` to add new endpoints to the project. Edit or create new targets and test cases :) 

_requires having [composr-cli](https://github.com/corbel-platform/composr-cli) installed_

## Toxying requests

For some scenarios you may want to add some delay to external requests or network issues, for that purpose you can use [Toxy](https://www.npmjs.com/package/toxy)

`node scripts/toxy` will launch a server in the port 4000 that will serve as a a proxy.

## Testing composr core alone

Launch `pm2 start scripts/restify -i 0` , then run : 

```
echo "GET http://localhost:8080/test" | vegeta attack -duration=60s -rate=100 | tee results.bin | vegeta report
```
