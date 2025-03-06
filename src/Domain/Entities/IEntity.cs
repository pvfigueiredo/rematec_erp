namespace Domain.Entities
{
    public interface IEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; init; }
        public DateTime LastUpdate { get; set; }
    }
}
