FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

# Install additional tools
RUN apt-get update && apt-get install -y \
    git \
    openssh-client \
    curl \
    wget \
    vim \
    nano \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Create node user with sudo privileges
RUN usermod -aG sudo node && \
    echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Switch to node user
USER node

# Set working directory
WORKDIR /workspace

# Create temp directory for git config
RUN mkdir -p /tmp

# Create SSH directory with proper permissions
RUN mkdir -p /home/node/.ssh && \
    chmod 700 /home/node/.ssh

# Set git safe directory
RUN git config --global --add safe.directory /workspace

EXPOSE 3000 5173

CMD ["sleep", "infinity"]