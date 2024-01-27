# anisette-api

[![main.yml](https://github.com/winstxnhdw/anisette-api/actions/workflows/main.yml/badge.svg)](https://github.com/winstxnhdw/anisette-api/actions/workflows/main.yml)
[![proxy.yml](https://github.com/winstxnhdw/anisette-api/actions/workflows/proxy.yml/badge.svg)](https://github.com/winstxnhdw/anisette-api/actions/workflows/proxy.yml)
[![formatter.yml](https://github.com/winstxnhdw/anisette-api/actions/workflows/formatter.yml/badge.svg)](https://github.com/winstxnhdw/anisette-api/actions/workflows/formatter.yml)
[![warmer.yml](https://github.com/winstxnhdw/anisette-api/actions/workflows/warmer.yml/badge.svg)](https://github.com/winstxnhdw/anisette-api/actions/workflows/warmer.yml)
[![keep-alive.yml](https://github.com/winstxnhdw/anisette-api/actions/workflows/keep-alive.yml/badge.svg)](https://github.com/winstxnhdw/anisette-api/actions/workflows/keep-alive.yml)

[![Open in Spaces](https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-md-dark.svg)](https://huggingface.co/spaces/winstxnhdw/anisette-api)
[![Open a Pull Request](https://huggingface.co/datasets/huggingface/badges/raw/main/open-a-pr-md-dark.svg)](https://github.com/winstxnhdw/anisette-api/compare)

A self-hosted anisette server for SideStore.

## Usage

Populate your `.env` file.

```bash
echo "CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_TOKEN" > .env
```

The token you may use to authenticate the API can be generated and deployed with the following command.

```bash
bun generate
```

## Development

Install all dependencies.

```bash
bun install
```
