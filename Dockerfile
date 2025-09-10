FROM node:20-alpine

WORKDIR /app

# Install git in the container
RUN apk add --no-cache git openssh

# Copy scripts if needed (optional)
# COPY . .

# Default command (override in GH Action)
CMD ["sh"]