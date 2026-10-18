# Site preview

The `preview` branch publishes to the separate public repository
`ahmedkleit/site-preview`. Its expected Pages address is
https://ahmedkleit.github.io/site-preview/.

## One-time GitHub setup

1. Create an empty public repository named `site-preview` under `ahmedkleit`.
2. Create a fine-grained personal access token restricted to `site-preview`,
   with repository permission **Contents: Read and write**. Set an expiration
   and renew the secret when it expires.
3. In `ahmed-kleit-site-2022`, open Settings > Secrets and variables > Actions
   and add the token as repository secret `PREVIEW_DEPLOY_TOKEN`.
   Never put the token in code or chat.
4. Commit the preview configuration and site changes on a branch named
   `preview` and push that branch. Check the **Publish preview** Actions run.
5. After its first successful run, open `site-preview` > Settings > Pages.
   Select **Deploy from a branch**, branch **gh-pages**, folder **/(root)**,
   then save. Leave the custom domain empty. Check the URL GitHub reports;
   an account-level custom domain can affect the final Pages address.

## Daily workflow

Push proposed changes to `preview`, wait for **Publish preview** to succeed,
and review the Pages site. Each push replaces this shared preview.
Production publishing remains a separate step after review.

The workflow refuses to publish from any branch other than `preview`,
including when manually dispatched. It generates paths under `/site-preview/`
and removes any generated CNAME to avoid assigning the production domain.
Normal builds retain the existing `/` router base.

For a local preview build, activate the repository's Node 16.17.0 and Yarn
1.22.19 tools and run:

```sh
NUXT_ROUTER_BASE=/site-preview/ yarn generate
```

Do not run this concurrently with the development server: both use `.nuxt`.
