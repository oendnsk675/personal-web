run:
	@pnpm run dev

build-run:
	@rm -rf .next
	@sleep 3
	@pnpm run build
	@sleep 3
	@pnpm run start