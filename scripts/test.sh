# define some colors to use for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

DOCKER_CONTAINER_NAME="cachingandmemoization_test_1"

docker-compose up -d test redis

if [ $? -ne 0 ] ; then
  printf "${RED}Docker Compose Failed${NC}\n"
  exit -1
fi

# wait for the test service to complete and grab the exit code
TEST_EXIT_CODE=`docker wait ${DOCKER_CONTAINER_NAME}`

# output the logs for the test (for clarity)
docker logs ${DOCKER_CONTAINER_NAME}

# inspect the output of the test and display respective message
if [ -z ${TEST_EXIT_CODE+x} ] || [ "$TEST_EXIT_CODE" -ne 0 ] ; then
  printf "${RED}Tests Failed${NC} - Exit Code: $TEST_EXIT_CODE\n"
else
  printf "${GREEN}Tests Passed${NC}\n"
fi

cleanup () {
  docker-compose down
}

cleanup

exit $TEST_EXIT_CODE
