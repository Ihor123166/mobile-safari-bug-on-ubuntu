# To reproduce issue:

- `git clone https://github.com/Ihor123166/mobile-safari-bug-on-ubuntu.git`
- `cd mobile-safari-bug-on-ubuntu` 
- Install yarn if needed `npm install -g yarn`
- Install dependencies `yarn && yarn playwright install --with-deps`
- Run tests on ubuntu `docker run -it --rm --ipc=host -v ./:/tests mcr.microsoft.com/playwright:v1.49.1 /bin/bash -c "cd /tests && yarn playwright test"`
